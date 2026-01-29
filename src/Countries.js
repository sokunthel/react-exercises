import React, { useEffect, useMemo, useState } from "react";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [sort, setSort] = useState({ by: "", dir: "" });
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://react-interview-api.checkr-sandbox.com/countries")
      .then((response) => response.clone().json())
      .then(setCountries);
  }, []);

  const handleSort = (field) => {
    setSort((prev) => ({
      by: field,
      dir: prev.dir === "" || prev.dir === "desc" ? "asc" : "desc",
    }));
  };

  const sortedCountries = useMemo(() => {
    const c = [...countries];
    if (sort.dir) {
      c.sort((a, b) => a[sort.by].localeCompare(b[sort.by]));
      if (sort.dir === "desc") {
        c.reverse();
      }
    }
    return c;
  }, [countries, sort]);

  const filteredCountries = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sortedCountries;

    return sortedCountries.filter((c) => c.name.toLowerCase().includes(q));
  }, [sortedCountries, query]);

  return (
    <>
      <div className="app-title">
        <h1>Add some features!</h1>
      </div>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Name</th>
            <th onClick={() => handleSort("alpha2Code")}>Code</th>
            <th onClick={() => handleSort("capital")}>Capital</th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map((country) => (
            <tr key={country.alpha2Code}>
              <td>{country.name}</td>
              <td>{country.alpha2Code}</td>
              <td>{country.capital}</td>
              <td>
                <img
                  className="flag"
                  alt={`${country.alpha2Code}-flag`}
                  src={country.flags.svg}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
