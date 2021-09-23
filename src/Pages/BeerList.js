import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../Modules/actions";

// 테이블의 column header를 드래그해서 순서를 변경할 때 redux에 저장된 순서도 변경 되야 함
// abv의 필터기능 -> 다중선택 가능해야 함
// 장바구니 기능 있어야 함 - 맥주 종류를 장바구니에 추가, 삭제
// 맥주 클릭하면 modal창이 뜨면서 상세정보를 보여주어야 함 (antd 컴포넌트 사용하기)

const BeerList = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const beers = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.loadData());
  }, [dispatch]);

  return (
    <div>
      <MaterialTable
        title="Beer List"
        columns={[
          { title: "List Num.", field: "id" },
          { title: "Name", field: "name" },
          {
            title: "ABV",
            field: "abv",
          },
          { title: "Tagline", field: "tagline" },
        ]}
        data={beers.map((beer) => ({
          id: `${beer.id}`,
          name: `${beer.name}`,
          abv: `${beer.abv}`,
          tagline: `${beer.tagline}`,
        }))}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          sorting: false,
          selection: true,
          search: true,
          paginationType: "stepped",
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? "#EEE" : "#FFF",
          }),
        }}
      />
    </div>
  );
};

export default BeerList;
