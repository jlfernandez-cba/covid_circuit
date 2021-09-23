import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
// import axios from "axios"


// async function main(){
//   const response = await axios.get("https://adsadsadsada")
//   const data = response.data.dat

// }

// main()


const data = [
  {
    date: "2021-01",
    xcoord: 0.0,
    "B.1.1.7": 0.0056657223796034,
    "B.1.617.2": 0.0,
    "B.1.177": 0.0113314447592068,
    "AY.4": 0.0,
    "AY.9": 0.0,
    "P.1": 0.0,
    "B.1.621": 0.0,
    Others: 0.9830028328611898
  },
  {
    date: "2021-02",
    xcoord: 0.14285714285714285,
    "B.1.1.7": 0.13494809688581316,
    "B.1.617.2": 0.0,
    "B.1.177": 0.2647058823529412,
    "AY.4": 0.0,
    "AY.9": 0.0,
    "P.1": 0.0,
    "B.1.621": 0.0,
    Others: 0.6003460207612457
  },
  {
    date: "2021-03",
    xcoord: 0.2857142857142857,
    "B.1.1.7": 0.5009881422924901,
    "B.1.617.2": 0.0,
    "B.1.177": 0.15612648221343872,
    "AY.4": 0.0,
    "AY.9": 0.0,
    "P.1": 0.0,
    "B.1.621": 0.0,
    Others: 0.34288537549407117
  },
  {
    date: "2021-04",
    xcoord: 0.42857142857142855,
    "B.1.1.7": 0.7145804676753783,
    "B.1.617.2": 0.0,
    "B.1.177": 0.03645116918844567,
    "AY.4": 0.0,
    "AY.9": 0.0,
    "P.1": 0.01031636863823934,
    "B.1.621": 0.0,
    Others: 0.23865199449793673
  },
  {
    date: "2021-05",
    xcoord: 0.5714285714285714,
    "B.1.1.7": 0.7638398115429917,
    "B.1.617.2": 0.002355712603062426,
    "B.1.177": 0.0017667844522968198,
    "AY.4": 0.0,
    "AY.9": 0.0,
    "P.1": 0.025323910482921083,
    "B.1.621": 0.002355712603062426,
    Others: 0.2043580683156655
  },
  {
    date: "2021-06",
    xcoord: 0.7142857142857143,
    "B.1.1.7": 0.7416864608076009,
    "B.1.617.2": 0.010688836104513063,
    "B.1.177": 0.0029691211401425177,
    "AY.4": 0.0,
    "AY.9": 0.0,
    "P.1": 0.017814726840855107,
    "B.1.621": 0.020783847980997625,
    Others: 0.20605700712589073
  },
  {
    date: "2021-07",
    xcoord: 0.8571428571428571,
    "B.1.1.7": 0.3799167052290606,
    "B.1.617.2": 0.43220731142989355,
    "B.1.177": 0.0013882461823229986,
    "AY.4": 0.0,
    "AY.9": 0.0,
    "P.1": 0.015733456732993985,
    "B.1.621": 0.01018047200370199,
    Others: 0.16057380842202684
  },
  {
    date: "2021-08",
    xcoord: 1.0,
    "B.1.1.7": 0.051256776737309016,
    "B.1.617.2": 0.5505174963035978,
    "B.1.177": 0.0004928536224741252,
    "AY.4": 0.1232134056185313,
    "AY.9": 0.09807787087235091,
    "P.1": 0.0014785608674223755,
    "B.1.621": 0.003942828979793002,
    Others: 0.17102020699852144
  }
];

const toPercent = (decimal: number, fixed: number = 0) => `${(decimal * 100).toFixed(fixed)}%`;

const getPercent = (value: number, total: number) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const renderTooltipContent = (o: any) => {
  const { payload = [], label } = o;
  const total = payload.reduce((result: number, entry: any) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function PercentStackedArea() {
  return (
      <AreaChart
        width={600}
        height={400}
        data={data}
        stackOffset="expand"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" allowDataOverflow />
        <YAxis tickFormatter={toPercent} />
        <Tooltip content={renderTooltipContent} isAnimationActive={false} allowEscapeViewBox={{ x: false, y: false }} />
        {/* <Area type="monotone" dataKey="xcoord" stackId="1" stroke="#F94144" fill="#F94144" /> */}
        <Area type="monotone" dataKey="B.1.1.7" stackId="1" stroke="#F3722C" fill="#F3722C" />
        <Area type="monotone" dataKey="B.1.617.2" stackId="1" stroke="#F8961E" fill="#F8961E" />
        <Area type="monotone" dataKey="B.1.177" stackId="1" stroke="#F9844A" fill="#F9844A" />
        <Area type="monotone" dataKey="AY.4" stackId="1" stroke="#F9C74F" fill="#F9C74F" />
        <Area type="monotone" dataKey="AY.9" stackId="1" stroke="#90BE6D" fill="#90BE6D" />
        <Area type="monotone" dataKey="P.1" stackId="1" stroke="#43AA8B" fill="#43AA8B" />
        <Area type="monotone" dataKey="B.1.621" stackId="1" stroke="#4D908E" fill="#4D908E" />
        <Area type="monotone" dataKey="Others" stackId="1" stroke="#577590" fill="#577590" />
      </AreaChart>
  );
}
