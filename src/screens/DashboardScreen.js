import React, { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import AddUserModal from "../components/AddUserModal";
import MemberCard from "../components/MemberCard";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";

const DashboardScreen = () => {
  const [user, setuser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredUser, setFilteredUser] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onSearch = () => {
    setFilteredUser(
      user.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setuser(data);
    if(data){
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


 if(loading || user.length === 0){
  return(
    <div className='d-flex flex-column justify-content-center align-items-center' style={{height:'100vh'}}>
      <Triangle
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>
<div className='text-center h3 mb-4 p-2'>YellowPages</div>
    </div>
  )
 }

  return (
    <div className="m-5">
      <PageTitle />
      <div className="d-flex justify-content-between align-items-center  mb-3">
        <SearchBar searchValue={setSearchValue} onSearch={onSearch} />
        <div>
          <button
            className="btn btn-primary ml-auto"
            onClick={() => setIsOpen(true)}
          >
            Add User
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        {filteredUser.length
          ? filteredUser.map((item) => (
              <div className="col-md-4 col-sm-6 col-lg-3 mb-4 shadow-sm">
                <MemberCard
                  key={item.id}
                  name={item.name}
                  email={item.email}
                  phone={item.phone}
                  website={item.website}
                />
              </div>
            ))
          : user?.map((item) => (
              <div className="col-md-4 col-sm-6 col-lg-3 mb-4 shadow-sm">
                <MemberCard
                  key={item.id}
                  name={item.name}
                  email={item.email}
                  phone={item.phone}
                  website={item.website}
                />
              </div>
            ))}
      </div>

      <AddUserModal isOpen={isOpen} toggleModal={setIsOpen} setuser={setuser}>
        {" "}
      </AddUserModal>
    </div>
  );
};

export default DashboardScreen;
