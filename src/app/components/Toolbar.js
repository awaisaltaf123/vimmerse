import React from "react";
import {
  faEraser,
  faPaintBrush,
  faArrowRotateLeft,
  faDeleteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Toolbar = ({
  currentColor,
  canvasColor,
  handleDownload,
  dateUrl,
  handleClear,
  handleEraserMode,
  handleDelete,
  handleRegularMode,
  handleColor,
  handleCanvasColor,
  handleWidth,
  isRegularMode,
  isAutoWidth,
  isEraser,
}) => {
  return (
    <div className="sidebar">
      <div>
        <div
          className="tool-section tool-section--lrg"
          data-tooltip-id="canvasColor"
        >
          <div className="tool-section">
            <small>
              <strong>Canvas color</strong>
            </small>
          </div>
          <input
            disabled={!isRegularMode}
            value={canvasColor}
            className="btn--color"
            type="color"
            id="toolColorPicker"
            onChange={handleCanvasColor}
          />
          <strong>{canvasColor}</strong>
        </div>

        <div
          className="tool-section tool-section--lrg"
          data-tooltip-id="brushColor"
        >
          <div className="tool-section">
            <small>
              <strong>Brush color</strong>
            </small>
          </div>
          <input
            disabled={!isRegularMode}
            value={currentColor}
            className="btn--color"
            type="color"
            id="toolColorPicker"
            onChange={handleColor}
          />
          <strong>{currentColor}</strong>
        </div>

        <div className="tool-section">
          <small>
            <strong>Tools</strong>
          </small>
        </div>
        <div className="tool-grid tool-section tool-section--lrg">
          <div data-tooltip-id="brush">
            <button
              className={`btn btn--tool ${
                isRegularMode && !isEraser ? "btn--active" : ""
              }`}
              onClick={handleRegularMode}
            >
              <FontAwesomeIcon icon={faPaintBrush} />
            </button>
          </div>
          <div data-tooltip-id="eraser">
            <button
              className={`btn btn--tool ${
                isEraser ? "btn--eraser-active" : ""
              }`}
              onClick={handleEraserMode}
            >
              <FontAwesomeIcon icon={faEraser} />
            </button>
          </div>
        </div>
        {!isAutoWidth && (
          <div className="tool-section tool-section--lrg">
            <div className="tool-section">
              <small>
                <strong>Brush size</strong>
              </small>
            </div>
            <div className="tool-section">
              <input
                defaultValue="50"
                type="range"
                min="10"
                max="90"
                onChange={handleWidth}
              />
            </div>
          </div>
        )}
      </div>
      <div className="action-btn">
        <a
          className="icon-btn"
          download="image.png"
          onClick={handleDownload}
          href={dateUrl}
          data-tooltip-id="save"
        >
          <FontAwesomeIcon icon={faSave} />
        </a>
        <a className="icon-btn" onClick={handleClear} data-tooltip-id="clear">
          <FontAwesomeIcon icon={faArrowRotateLeft} />
        </a>
        <a className="icon-btn" onClick={handleDelete} data-tooltip-id="delete">
          <FontAwesomeIcon icon={faDeleteLeft} />
        </a>
      </div>
      <ReactTooltip id="brush" place="bottom" content="Brush" />
      <ReactTooltip id="save" place="bottom" content="Save" />
      <ReactTooltip id="clear" place="bottom" content="Clear" />
      <ReactTooltip id="eraser" place="bottom" content="Eraser" />
      <ReactTooltip id="delete" place="bottom" content="Delete" />
      <ReactTooltip
        id="brushColor"
        place="bottom"
        content="Select Brush color"
      />
    </div>
  );
};

export default Toolbar;
