import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone'

const TimeZone = () => {
  const [userTimeZone, setUserTimeZone] = useState(null)
  const [currentDate, setCurrentDate] = useState(null)
  const [utcDate, setUtcDate] = useState(null)

  useEffect(() => {
    const userTimeZone = moment.tz.guess()
    setUserTimeZone(userTimeZone)

    const now = moment()
    const userTimeZoneDate = now.clone().tz(userTimeZone).format('YYYY-MM-DD HH:mm:ss')
    const utcDate = now.clone().utc().format('YYYY-MM-DD HH:mm:ss')

    setCurrentDate(userTimeZoneDate)
    setUtcDate(utcDate)
  }, [])

  return (
    <div style={{color: '#555555'}}>
      <p>User Time Zone: {userTimeZone}</p>
      <p>Current Date (User Time Zone): {currentDate}</p>
      <p>Current Date (UTC): {utcDate}</p>
    </div>
  );
};

export default TimeZone