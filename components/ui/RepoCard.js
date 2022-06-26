import React, { useState, useEffect } from "react";
import useSWR from "swr";

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";
import repoService from "../../services/repoService";

function RepoCard({ repo }) {
  console.log("repo : ", repo);
  console.log("url :", repo.languages_url);

  const { data: lang, error: langError } = useSWR(
    repo.languages_url,
    repoService.getRepoInfo(repo.languages_url, (r) => {
        return Object.keys(r).map(k => { return { name : k, value : r[k] } })
    })
  );

  return (
    <div className="w-1/2 bg-gray-500">
      <h1>{repo.name}</h1>
      <p>{repo.description}</p>

      {lang && !langError ? (
        <>
          <p>{JSON.stringify(lang)}</p>
          <BarChart width={730} height={250} data={lang} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </>
      ) : (
        <p>...</p>
      )}
    </div>
  );
}

export default RepoCard;
