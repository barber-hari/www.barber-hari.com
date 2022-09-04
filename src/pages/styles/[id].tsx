import React, { FC, useEffect } from 'react';
import { Style } from 'models/Style';
import { GetStaticProps } from 'next';
import { findAllId, findAllStyles } from 'repositories/styleRepository';
import Layout from 'components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import * as $ from './DetailPage.styled';
import Path from '../../models/Path';

export interface DetailProps {
  styles: Style[];
  style: Style;
}

const DetailPage: FC<DetailProps> = props => {
  const {
    styles,
    style: { id, title, description, images },
  } = props;

  useEffect(() => {
    document.querySelector('main')?.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [id])

  return (
    <Layout>
      <$.Container>
        <$.SideBar>
          <$.StyledInfo>
            <$.HairInfo>
              <$.HairTitle>{title}</$.HairTitle>
              <$.HairDescription>{description}</$.HairDescription>
            </$.HairInfo>
          </$.StyledInfo>
        </$.SideBar>
        <$.Contents>
          <$.Images>
            {images.map(image => (
              <$.Image key={`images-${image}`}>
                <Image
                  src={`/styles/${id}/${image}`}
                  key={`image-${image}`}
                  layout="fill"
                  alt={title}
                />
              </$.Image>
            ))}
          </$.Images>
          <$.Masonry>
            {styles.map(style => (
              <$.LinkImages key={`image-${style.id}`}>
                <Link href={`${Path.STYLES}/${style.id}`}>
                  <a>
                    {style.title}
                    <Image
                    data-id={style.id}
                    key={`image-${style.id}-${style.thumb}`}
                    src={`/styles/${style.id}/${style.thumb}`}
                    loading="lazy"
                    layout="fill"
                    alt={style.title}
                  />
                  </a>
                </Link>
              </$.LinkImages>
            ))}
          </$.Masonry>
        </$.Contents>
      </$.Container>
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

export const getStaticProps: GetStaticProps<DetailProps> = ({ params }) => {
  let style: Style = {
    "id": "",
    "title": "",
    "description": "",
    "images": [],
    "thumb": ""
  }
  const styles = findAllStyles().filter((targetStyle) => {
    if(targetStyle.id === params?.id) {
      style = targetStyle;
      return false;
    }
    return true;
  });
  return {
    props: {
      style,
      styles
    },
  };
};
