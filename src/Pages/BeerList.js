import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadData } from "../Modules/posts";
import FilterButton from "../components/FillterButton";
import { Modal } from "antd";
import "antd/dist/antd.css";

const TableContainer = styled.div`
  height: 100vh;
  margin-top: 120px;
`;

const BeerImg = styled.img`
  height: 30vh;
  margin-right: 20px;
`;

const BeerList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const beers = useSelector((state) => state.posts);
  const lists = useSelector((state) => state.reorder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleColumnDrag = () => {
    let newList = [];
    lists.forEach((column) => {
      newList.concat({
        field: column.field,
        newList: column.tableData.newList,
      });
    });
    console.log(newList);
  };

  return (
    <TableContainer>
      <MaterialTable
        title="Beer List"
        columns={lists}
        data={beers.map((beer) => ({
          id: `${beer.id}`,
          name: `${beer.name}`,
          abv: `${beer.abv}`,
          tagline: `${beer.tagline}`,
        }))}
        onRowClick={(e, rowData) => {
          setSelectedRow(rowData.tableData.id);
          showModal();
        }}
        onColumnDragged={handleColumnDrag}
        options={{
          sorting: false,
          selection: true,
          search: true,
          paginationType: "stepped",
        }}
      />
      <FilterButton />
      {selectedRow !== null ? (
        <Modal
          title={beers[selectedRow].name}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <MainContainer>
            <div>
              <BeerImg src={beers[selectedRow].image_url} alt="beer's img" />
            </div>
            <div>
              <h3>{beers[selectedRow].tagline}</h3>
              <p>{beers[selectedRow].description}</p>
              <p>First Brewed : {beers[selectedRow].first_brewed}</p>
              <p>ABV : {beers[selectedRow].abv}</p>
              <p>IBU : {beers[selectedRow].ibu}</p>
            </div>
          </MainContainer>
        </Modal>
      ) : null}
    </TableContainer>
  );
};

export default BeerList;

const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
`;
