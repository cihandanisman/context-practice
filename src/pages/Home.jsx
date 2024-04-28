import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CardWeather from "./CardWeather";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const url = "https://api.weatherapi.com/v1";
    const apiKey = "25106ac1330141b2aab220317241603";

    try {
      const res = await fetch(`${url}/current.json?key=${apiKey}&q=${search}`);
      if (!res.ok) {
        throw new Error("Failed!!");
      } else {
        const datam = await res.json();

        setData((data) => [...data, datam]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    getData();
  };

  const handleDelete = (item) => {
    const newData = data.filter((dataItem) => dataItem.location.name !== item.location.name);
    setData(newData);
  };
  

  return (
    <>
      <Form
        className="d-flex justify-content-center align-items-center mt-5"
        inline
        onSubmit={handleSearch}
      >
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      <div className="d-flex flex-wrap justify-content-center">
        {data.map((item, index) => (
          <CardWeather key={index} handleDelete={handleDelete} item={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
