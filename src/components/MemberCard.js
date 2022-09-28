import React from "react";

const MemberCard = ({ name, email, phone }) => {
  return (
      <div className="card h-100 text-center alert-success">
        <div className="card-body">
          <h5 className="card-title font-weight-normal">{name}</h5>
          <p className="card-text text-muted">Email: {email}</p>
          <p className="card-text text-muted">Phone: {phone}</p>
        </div>
      </div>
    
  );
};

export default MemberCard;
