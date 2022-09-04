import React, { FC } from 'react';
import { Style } from 'models/Style';
import { GetStaticProps } from 'next';
import { findAllId, findAllStyles } from 'repositories/styleRepository';
import Layout from 'components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
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

  const router = useRouter();

  const routingHandler = ({ target }: React.MouseEvent) => {
    target instanceof HTMLImageElement &&
      router.push(`${Path.STYLES}/${target.dataset.id}`);
  };

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
                <Link scroll href={`${Path.STYLES}/${style.id}`}>
                  {style.title}
                </Link>
                <Image
                  data-id={style.id}
                  key={`image-${style.id}-${style.thumb}`}
                  src={`/styles/${style.id}/${style.thumb}`}
                  loading="lazy"
                  layout="fill"
                  alt={style.title}
                />
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

export const getStaticProps: GetStaticProps = ({ params }) => {
  return {
    props: {
      style: findAllStyles().find(({ id }) => id === params?.id),
      styles: findAllStyles(),
    },
  };
};
