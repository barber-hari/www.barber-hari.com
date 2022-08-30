import React, { FC, ReactNode } from 'react';
import axios from 'axios';

export interface DetailPageProps {
  children?: ReactNode;
}

const DetailPage: FC<DetailPageProps> = props => {
  const { children } = props;
  return <div></div>;
};

export default DetailPage;

export const getServerSideProps = async ctx => {
  const id = ctx.params.id;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = res.data;

  console.log(data); // 해당 콘솔은 어디에서 출력이 되나요?

  return {
    props: {
      item: data,
    },
  };
};
