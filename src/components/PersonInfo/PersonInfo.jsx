import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PersonInfo.module.css";
import spinner from "../../assets/spinner.svg";
const url = "https://randomuser.me/api/";

const PersonInfo = () => {
  const [fetchPerson, setFetchPerson] = useState({});
  const [text1, setText1] = useState("My name is");
  const [text2, setText2] = useState("");
  const [loading, setLoading] = useState(false);
  const apiFetcher = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const person = response.data.results[0];
      console.log(person);
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
      console.log(personData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    apiFetcher();
  }, []);
  return (
    <div className="card">
      <nav className="navbar"></nav>
      <div className=""></div>
    </div>
  );
};

export default PersonInfo;
