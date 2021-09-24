import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const FilterButton = () => {
  const [selected, setSelected] = useState([]);
  const beers = useSelector((state) => state.posts);
  const abvResult = beers.map((beer) => beer.abv);
  console.log(abvResult);

  const handleClick1 = () => {
    const result = abvResult.filter((item) => 4 < item && item < 5);
    setSelected(result);
  };
  const handleClick2 = () => {
    const result = abvResult.filter((item) => 5 < item && item < 6);
    setSelected(result);
  };
  const handleClick3 = () => {
    const result = abvResult.filter((item) => 6 < item && item < 7);
    setSelected(result);
  };
  const handleClick4 = () => {
    const result = abvResult.filter((item) => 7 < item && item < 8);
    setSelected(result);
  };
  const handleClick5 = () => {
    const result = abvResult.filter((item) => 8 < item && item < 9);
    setSelected(result);
  };
  const handleClick6 = () => {
    const result = abvResult.filter((item) => 10 < item);
    setSelected(result);
  };

  const menu = (
    <Menu>
      {}
      <Menu.Item key="0">
        <button onClick={handleClick1}>4-5</button>
      </Menu.Item>
      <Menu.Item key="1">
        <button onClick={handleClick2}>5-6</button>
      </Menu.Item>
      <Menu.Item key="2">
        <button onClick={handleClick3}>6-7</button>
      </Menu.Item>
      <Menu.Item key="3">
        <button onClick={handleClick4}>7-8</button>
      </Menu.Item>
      <Menu.Item key="4">
        <button onClick={handleClick5}>8-9</button>
      </Menu.Item>
      <Menu.Item key="5">
        <button onClick={handleClick6}>10-</button>
      </Menu.Item>
    </Menu>
  );

  return (
    <FilterContainer>
      <h3>ABV Filter Button</h3>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link">
          ABV Filtering <DownOutlined />
        </a>
      </Dropdown>
      <div style={{ display: "flex" }}>
        {selected.map((item) => (
          <div style={{ marginRight: 10 }}>{item}</div>
        ))}
      </div>
    </FilterContainer>
  );
};

export default FilterButton;

const FilterContainer = styled.div`
  padding: 30px;
`;
