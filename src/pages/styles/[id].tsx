import React, { FC } from 'react';
import { Style } from 'models/Style';
import { GetStaticProps } from 'next';
import { findAllId, findAllStyles } from 'repositories/styleRepository';
import Layout from 'components/layout/Layout';
import Image from 'next/image';

export interface DetailProps {
  style: Style;
}

const DetailPage: FC<DetailProps> = props => {
  const {
    style: { id, images, title },
  } = props;

  return (
    <Layout>
      <div key={id}>
        {images.map(image => (
          <Image
            src={`/styles/${id}/${image}`}
            key={`image-${id}`}
            layout="fill"
            alt={title}
          />
        ))}
      </div>
    </Layout>
  );
};

export default DetailPage;

export async function getStaticPaths() {
  return {
    paths: findAllId().map(id => ({ params: { id } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  return {
    props: {
      style: findAllStyles().find(({ id }) => id === params?.id),
    },
  };
};
