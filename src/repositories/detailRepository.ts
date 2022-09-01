import path from 'path';
import * as fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const DETAIL_DIRECTORY = path.join(process.cwd(), 'src/public/detail');

export const getSortedDetailData = () => {
  const fileNames = fs.readdirSync(DETAIL_DIRECTORY);
  const allDetailData = fileNames.map(fileName => {
    // .md 지우고 id값 얻기
    const id = fileName.replace(/\.md$/, '');

    // 마크다운파일 읽기
    const fullPath = path.join(DETAIL_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // 메타데이터 파싱하기
    const matterResult = matter(fileContents);

    // id & 데이터 합치
    return {
      id,
      ...matterResult.data,
    };
  });

  // 데이터순으로 정렬
  return allDetailData.sort((a: any, b: any) => (a.date < b.date ? 1 : -1));
};

// 동적라우팅된 페이지에 데이타패칭
export const getAllDetailIds = () => {
  const fileNames = fs.readdirSync(DETAIL_DIRECTORY);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
};

export const getDetailData = async (id: any) => {
  const fullPath = path.join(DETAIL_DIRECTORY, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // remark 를 사용하여 마크다운을 HTML 변환
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};
