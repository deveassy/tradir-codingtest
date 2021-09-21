import MaterialTable from "material-table";
import React, { useEffect, useState, forwardRef } from "react";
import axios from "axios";

import styled from "styled-components";

// 테이블의 column header를 드래그해서 순서를 변경할 때 redux에 저장된 순서도 변경 되야 함 ()
// 장바구니 기능 있어야 함 - 맥주 종류를 장바구니에 추가, 삭제

const BeerList = () => {
  const [loading, setLoading] = useState(false);
  const [beers, setBeers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setBeers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get("https://api.punkapi.com/v2/beers");
        setBeers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchBeers();
  }, []);

  if (loading) return <div>Loaind..</div>;
  if (error) return <div>ERROR!</div>;
  if (!beers) return null;

  return (
    <div>
      <MaterialTable
        title="Beer List"
        columns={[
          { title: "Name", field: "name" },
          { title: "ABV", field: "abv" },
          { title: "Tagline", field: "tagline" },
        ]}
        data={beers.map((beer) => ({
          name: `${beer.name}`,
          abv: `${beer.abv}`,
          tagline: `${beer.tagline}`,
        }))}
        options={{ sorting: false, selection: true }}
      />
    </div>
  );
};

export default BeerList;
