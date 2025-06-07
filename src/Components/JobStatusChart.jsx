import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { useJobContext } from '../Context/UserContext';
import { useEffect ,useState} from 'react';

const COLORS = ['#007bff', '#dc3545']; 

function JobStatusChart() {
  const {jobsinfo} = useJobContext()
  const [appliedCount, setAppliedCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);

  useEffect(() => {
    let applied = 0, rejected = 0;
    jobsinfo.forEach((job) => {
      if (job.status === 'applied') applied++;
      else if (job.status === 'rejected') rejected++;
    });
    setAppliedCount(applied);
    setRejectedCount(rejected);
  }, [jobsinfo]);


  const data = [
    { name: 'Applied', value: appliedCount},
    { name: 'Rejected', value: rejectedCount }
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie 
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default JobStatusChart;
