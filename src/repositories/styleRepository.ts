import path from 'path';
import * as fs from 'fs';
import { Style } from 'models/Style';

const STYLES_DIRECTORY = path.join(process.cwd(), 'public/styles');

export const findAllStyles = (): Style[] => {
  try {
    const directoryNames = fs
      .readdirSync(STYLES_DIRECTORY)
      .filter((x: string) => !Number.isNaN(Number(x)));
    const styles: Style[] = directoryNames.map(directoryName => {
      const fullPath = path.join(STYLES_DIRECTORY, directoryName);
      const json = JSON.parse(
        fs.readFileSync(`${fullPath}/index.json`, 'utf-8')
      );
      return json as Style;
    });
    return styles.sort((a, b) => (a.id > b.id ? 1 : -1));
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const findAllId = () => {
  try {
    const directoryId = fs
      .readdirSync(STYLES_DIRECTORY)
      .filter((x: string) => !Number.isNaN(Number(x)));
    return directoryId as string[];
  } catch (error) {
    console.error(error);
    return [];
  }
};
