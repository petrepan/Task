import React, { useState } from "react";
import UpdateLeadBtn from "./UpdateLeadBtn";
import DeleteLeadBtn from "./DeleteLeadBtn";
import UpdateModal from "../components/UpdateModal";
import DeleteModal from "../components/DeleteModal";

const LeadsTable = ({ leads }) => {
  const [currentId, setCurrentId] = useState();

  return (
    <table className="leads_table">
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile Num</td>
          <td>Location Type</td>
          <td>Location String</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody className="grey_bg">
        {leads.length === 0 && "List of leads is empty"}
        {leads.map((lead) => (
          <tr key={lead.id}>
            <td>{lead.first_name}</td>
            <td>{lead.last_name}</td>
            <td>{lead.mobile}</td>
            <td>{lead.location_type}</td>
            <td>{lead.location_string}</td>
            <td>
              <UpdateLeadBtn
                currentId={currentId}
                setCurrentId={setCurrentId}
                leadId={lead.id}
              />
              <DeleteLeadBtn
                currentId={currentId}
                setCurrentId={setCurrentId}
                leadId={lead.id}
              />
              <UpdateModal currentId={currentId} />
              <DeleteModal currentId={currentId} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadsTable;
