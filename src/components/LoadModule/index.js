import { useState, useLayoutEffect } from "react";

const LoadModule = () => {
  const [loadedFile, setLoadedFile] = useState("");

  useLayoutEffect(() => {
    const importFile = async () => {
      try {
        const {
          default: file
        } = await import(/* webpackMode: "lazy" */ `../Module`);
        setLoadedFile(file);
      } catch (e) {
        setLoadedFile(`Error loading file:\n ${e.toString()}`);
      }
    };
    importFile();
  }, [setLoadedFile]);

  return loadedFile || null;
};

export default LoadModule;
