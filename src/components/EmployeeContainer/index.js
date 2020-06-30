import React, { useState, useEffect } from 'react';
import './style.css';
import Wrapper from "../Wrapper";
import EmployeeCard from "../EmployeeCard";
import employees from "../../employees.json";

function EmployeeContainer() {
  const [employee, setEmployee] = useState([]);
  const [sortType, setSortType] = useState ("salaryDescending");

  useEffect(() => {
    const sortBy = type => {
      const types = {
        salaryDescending: "salary",
        nameDescending: "name"
      };
      const sortProperty = types[type];
      const sorted = [...employees].sort((a, b) => b[sortProperty] - a[sortProperty]);
      console.log(sorted);
      setEmployee(sorted);
    };

    sortBy(sortType);
  }, [sortType]);

      return (
        <div>
          <div className="filter">
            <select onChange={(props) => setSortType(props.target.value)}>
              <option value="salaryDescending">Salary (Descending)</option>
              <option value="nameDescending">Name (Descending)</option>
            </select>
          </div>
          <Wrapper>
            {employee.map(data => (
              <EmployeeCard
                key={data.id}
                id={data.id}
                img={data.img}
                name={data.name}
                salary={data.salary} 
              />
            ))}
          </Wrapper>
        </div>
      );
    }

export default EmployeeContainer;