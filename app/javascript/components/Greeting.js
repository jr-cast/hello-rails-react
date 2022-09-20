import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessageSuccess } from '../redux/greetings/greetings';
import axios from 'axios';

const Greeting = () => {
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.greeting);

  async function fetchData() {
    await axios.get('api/message').then((res) => {
      dispatch(fetchMessageSuccess(res.data.message));
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <code>{msg}</code>
  )
}

export default Greeting;
