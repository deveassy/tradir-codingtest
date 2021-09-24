import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../Modules/actions";
import styled from "styled-components";
// import { Button } from "material-table";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";

// 테이블의 column header를 드래그해서 순서를 변경할 때 redux에 저장된 순서도 변경 되야 함
// abv의 필터기능 -> 다중선택 가능해야 함
// 장바구니 기능 있어야 함 - 맥주 종류를 장바구니에 추가, 삭제
// 맥주 클릭하면 modal창이 뜨면서 상세정보를 보여주어야 함 (antd 컴포넌트 사용하기)

const TableContainer = styled.div`
  height: 100vh;
  padding-bottom: 100px;
  margin-top: 120px;
`;

const BeerList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const beers = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.loadData());
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

  if (!beers) return <div> Loading... </div>;

  return (
    <TableContainer>
      <MaterialTable
        title="Beer List"
        columns={[
          { id: 1, title: "List Num.", field: "id" },
          {
            id: 2,
            title: "Name",
            field: "name",
          },
          {
            id: 3,
            title: "ABV",
            field: "abv",
          },
          { id: 4, title: "Tagline", field: "tagline" },
        ]}
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
        options={{
          sorting: false,
          selection: true,
          search: true,
          paginationType: "stepped",
        }}
      />
      {/* <FilterButton /> */}
      <>
        <Modal
          title={selectedRow === null ? "title" : beers[selectedRow].name}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div>
            <img
              src={selectedRow === null ? "" : beers[selectedRow].image_url}
              alt="beer's img"
              style={{ height: "20vh" }}
            />
          </div>
          <div>
            <h3>{selectedRow === null ? "" : beers[selectedRow].tagline}</h3>
          </div>
        </Modal>
      </>
    </TableContainer>
  );
};

export default BeerList;
