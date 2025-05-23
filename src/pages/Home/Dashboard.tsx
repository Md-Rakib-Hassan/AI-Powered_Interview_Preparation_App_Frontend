import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { data, useNavigate } from 'react-router-dom';
import { LucidePlus } from 'lucide-react';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { CARD_BG } from '../../utils/data';
import moment from 'moment'
import SummaryCard from '../../components/Cards/SummaryCard';
import Modal from '../../components/ui/Modal';
import CreateSessionForm from './CreateSessionForm';
import DeleteAlertContent from '../../components/DeleteAlertContent';
import toast, { Toaster } from 'react-hot-toast';
const Dashboard = () => {
    const navigate = useNavigate();

    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [sessions, setSessions] = useState([]);
    const [openDeleteAlert, setOpenDeleteAlert] = useState({
        open: false,
        data: null,
    });

    const fetchAllSessions = async () => {
        try {
            const response = await axiosInstance.get(API_PATHS.SESSION.GET_ALL);
            setSessions(response?.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fatching session data", error);
        }
    }

    const deleteSession = async (sessionData) => {
        try {
            await axiosInstance.delete(API_PATHS.SESSION.DELETE(sessionData?._id));
            toast.success("Session deleted Successfully");
            setOpenDeleteAlert({
                open: false,
                data: null,
            });
            fetchAllSessions();
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchAllSessions()
        
    },[])


    return (
        <div>
            <Toaster></Toaster>
                <div className='mx-auto pt-4 pb-4'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 pt-1 pb-6 px-4 md:px-0'>

                        {
                            sessions?.map((data, idx) => (
                                <SummaryCard
                                    key={data?._id}
                                    colors={CARD_BG[idx % CARD_BG.length]}
                                    role={data?.role || ""}
                                    topicsToFocus={data?.topicsToFocus || ""}
                                    experience={data?.experience || "-"}
                                    questions={data?.questions?.length || "-"}
                                    description={data?.description || ""}
                                    lastUpdated={
                                        data?.updatedAt
                                            ? moment(data.updatedAt).format("Do MMM YYYY")
                                            : ""
                                    }
                                    onSelect={() => navigate(`/dashboard/interview-prep/${data?._id}`)}
                                    onDelete={() => setOpenDeleteAlert({ open: true, data })}
                                />
                            )
                            )
                        }
                        
                    </div>

                    <button
                        onClick={() => setOpenCreateModal(true)}
                    className='h-12 md:h-12 flex items-center justify-center gap-3 bg-linear-to-br from-blue-500 to-blue-300 text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-linear-to-br hover:from-blue-300 hover:to-blue-500 transition-colors cursor-pointer hover:shadow-2xl hover:shadow-blue-500 fixed bottom-10 md:bottom-16 right-10'
                    >
                        <LucidePlus className='text-2xl text-white'></LucidePlus>
                        Add New
                    </button>
                </div>

                <Modal isOpen={openCreateModal}
                    onClose={
                        () => {
                            setOpenCreateModal(false);
                        }}
                    hideHeader
                >
                    <div>
                        <CreateSessionForm/>
                    </div>

            </Modal>
            
            <Modal
                isOpen={openDeleteAlert?.open}
                onClose={() => {
                    setOpenDeleteAlert({ open: false, data: null });
                }}
                title="Delete Alert"
                >
                <div className="w-[30vw]">
                    <DeleteAlertContent
                    content="Are you sure you want to delete this session detail?"
                    onDelete={() => deleteSession(openDeleteAlert.data)}
                    />
                </div>
            </Modal>


           
        </div>
    );
};

export default Dashboard;