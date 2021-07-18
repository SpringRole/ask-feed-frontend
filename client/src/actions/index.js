import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";
export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_KEY}/survey/createsurvey`,
    values
  );
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_KEY}/survey/getSurvey`
  );
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
