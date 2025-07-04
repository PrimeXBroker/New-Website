"use client";
export default function SitemapTable({ sitemaps }) {
  const urlCount = sitemaps.length;
  return (
    <div style={{ margin: "0", padding: "0" }}>
      <p
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "14px",
          fontWeight: "300",
          textAlign: "center",
          marginBottom: "20px",
          color: "#111111",
        }}
      >
        This XML Sitemap contains <strong>{urlCount}</strong> URLs.
      </p>
      <table
        style={{
          borderCollapse: "collapse",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "11px",
          margin: "0 auto",
        }}
      >
        <thead>
          <tr style={{ borderBottom: "1px solid #111111" }}>
            <th
              style={{
                padding: "8px 10px",
                textAlign: "left",
                fontWeight: "bold",
                backgroundColor: "#f2f2f2",
              }}
            >
              URL
            </th>
            <th
              style={{
                padding: "8px 10px",
                textAlign: "left",
                fontWeight: "bold",
                backgroundColor: "#f2f2f2",
              }}
            >
              Priority
            </th>
            <th
              style={{
                padding: "8px 10px",
                textAlign: "left",
                fontWeight: "bold",
                backgroundColor: "#f2f2f2",
              }}
            >
              Frequency
            </th>
            <th
              style={{
                padding: "8px 10px",
                textAlign: "left",
                fontWeight: "bold",
                backgroundColor: "#f2f2f2",
              }}
            >
              Last Modified
            </th>
          </tr>
        </thead>
        <tbody>
          {sitemaps.map((item, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#eeeeee",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#cccccc";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  index % 2 === 0 ? "#ffffff" : "#eeeeee";
              }}
            >
              <td
                style={{
                  color: "#000",
                  whiteSpace: "nowrap",
                  padding: "4px 10px 4px 10px",
                }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                  }}
                >
                  {item.url}
                </a>
              </td>
              <td
                style={{
                  padding: "4px 10px 4px 10px",
                  color: "#000",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                {item.priority}
              </td>
              <td
                style={{
                  padding: "4px 10px 4px 10px",
                  color: "#000",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                {item.changeFrequency}
              </td>
              <td
                style={{
                  padding: "4px 10px 4px 10px",
                  color: "#000",
                  whiteSpace: "nowrap",
                }}
              >
                {new Date(item.lastModified)
                  .toISOString()
                  .replace("T", " ")
                  .slice(0, -5)}{" "}
                +00:00
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
