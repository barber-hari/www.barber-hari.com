import React from 'react';
import Layout from '../../components/layout/Layout';
import Artwork from '../../components/styles/Artwork';
import { useRouter } from 'next/router';
import { STYLES_IMAGES } from '../../models/Image';
import { getSortedDetailData } from '../../repositories/detailRepository';
import { GetStaticProps } from 'next';

export interface IndexProps {
  allDetailData: string;
}

const Index: React.FC<IndexProps> = props => {
  const { allDetailData } = props;
  return (
    <Layout>
      {/*<Artwork />*/}
      <div>{allDetailData.length}</div>
    </Layout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;
  const allDetailData = getSortedDetailData();
  return {
    props: {
      allDetailData,
    },
  };
};

// context
// params: 다이나믹 라우트 페이지라면, params 라우트 파라미터 정보를 가지고 있다.
// req: HTTP request object
// res: HTTP response object
// query: 쿼리스트링
// preview: preview 모드 여부 >공식문서
// previewData: setPreviewData 설정된 데이터

// return
// props : 해당 컴포넌트로 리턴할 값 (선택적)
// revalidate : 페이지 재생성이 발생할 수 있는 시간(초). 기본값은 false
// 이게 거짓이면 다음 빌드때까지 페이지가 빌드된 상태로 캐시됨. (선택적)
// notFound : Boolean, 404 보내는 것을 허용한다. (선택적)
