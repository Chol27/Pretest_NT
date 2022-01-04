import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [categories, setCategories] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const res = await axios.get("https://api.publicapis.org/categories");
        setCategories(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchDatas();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <span>Search Key </span>
        <input
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
        />
      </div>
      <table style={{ width: 300 }}>
        <tbody>
          {categories
            .filter((category) => {
              return category.includes(searchKey);
            })
            .map((category) => {
              return (
                <tr>
                  <td style={{ border: "1px solid black" }}>{category}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
