import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLead } from "../actions/leadActions";
import AddLeadBtn from "../components/AddLeadBtn";
import LeadsTable from "../components/LeadsTable";
import AddModal from "../components/AddModal";
import Message from "../components/Message";

const Home = () => {
  const dispatch = useDispatch();

  const getLead = useSelector((state) => state.getLead);

  const { loading, leads, error } = getLead;

  useEffect(() => {
    dispatch(getAllLead());
  }, [getAllLead]);

  return (
    <section className="container">
      {loading ? (
        <div>loading</div>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <AddLeadBtn />
          <LeadsTable leads={leads} />
          <AddModal />
        </>
      )}
    </section>
  );
};

export default Home;
