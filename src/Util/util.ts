import React from "react";

const cleanData = (data: any) => {
  const cleanedData = data.map((info: any) => {
    return {
      id: info.id,
      title: info.title,
      abstract: info.abstract,
      url: info.url,
      date: info['published_date']
    }
  })
  return cleanedData
}

export default cleanData