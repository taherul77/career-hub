import { PieChart, Pie, Tooltip, ResponsiveContainer, Label } from "recharts";

const Chart = () => {
    const data = [
        { name: "Assignment 1", value: 60 },
        { name: "Assignment 2", value: 60 },
        { name: "Assignment 3", value: 60 },
        { name: "Assignment 4", value: 60 },
        { name: "Assignment 5", value: 59 },
        { name: "Assignment 6", value: 60 },
        { name: "Assignment 7", value: 60 },
        { name: "Assignment 8", value: 60 },
    ];

    return (
        
        <div className="my-10">
            <ResponsiveContainer width="100%" height={400}>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={true}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        innerRadius={60}
                        fill="#6d8699"
                        label
                    >
                        <Label
                            value="Marks"
                            position="center"
                            fill="#6d8699"
                            fontSize={20}
                            fontWeight={700}
                        />
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
