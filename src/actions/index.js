import axios from "axios";
import {  FETCH_SURVEYS } from "./types";

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post(
    "http://localhost:2000/survey/createsurvey",
    values
  );
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("http://localhost:2000/survey/getSurvey");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
