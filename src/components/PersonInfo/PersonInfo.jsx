import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "./PersonInfo.module.css";
import spinner from "../../assets/spinner.svg";
import SvgContainer from "./components/SvgContainer/SvgContainer";
import ButtonTable from "./components/ButtonTable/ButtonTable";
const url = "https://randomuser.me/api/";

const PersonInfo = () => {
  const [fetchPerson, setFetchPerson] = useState({});
  const [text1, setText1] = useState("My name is");
  const [text2, setText2] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(fetchPerson);
  const apiFetcher = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const person = response.data.results[0];
      const {
        email,
        phone,
        gender,
        dob: { age },
        picture: { large: image },
        name: { title, first: name, last: surname },
        location: { country },
        login: { password },
      } = person;
      const fullname = `${title} ${name} ${surname}`;
      const personData = {
        email,
        gender,
        fullname,
        image,
        age,
        phone,
        country,
        password,
      };
      //   console.log(personData);
      setFetchPerson(personData);
      setText2(personData.fullname);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    apiFetcher();
  }, []);
  return (
    <div className={styled.card}>
      <nav className={styled.navbar}></nav>
      <div className={styled.container}>
        {loading ? (
          <img src={spinner} alt="spinner-loadig" className={styled.spinner} />
        ) : (
          <>
            <img
              src={fetchPerson.image}
              alt="user-picture"
              className={styled.image}
            />
            <div className={styled.text1}>{text1}</div>
            <div className={styled.text2}>{text2}</div>
          </>
        )}
      </div>
      <SvgContainer
        fetchPerson={fetchPerson}
        setText1={setText1}
        setText2={setText2}
      />
      <ButtonTable apiFetcher={apiFetcher} fetchPerson={fetchPerson} />
    </div>
  );
};

export default PersonInfo;
