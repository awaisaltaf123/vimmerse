"use client";

import React, { useState, useCallback } from "react";
import Canvas from "./Canvas";
import Intro from "./Intro";
import Toolbar from "./Toolbar";
import { usePainter } from "../hooks/usePainter";

const AppView = () => {
  const [dateUrl, setDataUrl] = useState("#");
  const [{ canvas, isReady, ...state }, { init, ...api }] = usePainter();

  const handleDownload = useCallback(() => {
    if (!canvas || !canvas.current) return;

    setDataUrl(canvas.current.toDataURL("image/png"));
  }, [canvas]);

  const toolbarProps = { ...state, ...api, dateUrl, handleDownload };

  return (
    <div className="wrapper-div">
      <Intro isReady={isReady} init={init} />
      <Toolbar {...toolbarProps} />
      <Canvas width={state.currentWidth} canvasRef={canvas} />
    </div>
  );
};

export default AppView;
