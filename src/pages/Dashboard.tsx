import React from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';
import { ApexOptions } from 'apexcharts';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #202020;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  color: #e0e0e0;

  @media (max-width: 768px) {
    padding: 10px; /* Adjust padding for mobile */
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: #303030;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column; /* Stack charts and notes on top of each other */
    padding: 10px; /* Adjust padding */
  }
`;

const ChartContainer = styled.div`
  flex: 70%;
  padding-right: 20px;

  @media (max-width: 768px) {
    flex: 100%;
    padding-right: 0; /* Remove padding on mobile */
    margin-bottom: 15px; /* Add spacing between chart and notes */
  }
`;

const NotesContainer = styled.div`
  flex: 30%;
  padding: 15px;
  background-color: #00695c;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  max-height: 400px;
  overflow-y: auto;
  color: #ffffff;

  @media (max-width: 768px) {
    flex: 100%;
    padding: 10px;
    max-height: 250px; /* Reduce max height on mobile */
  }
`;

const Note = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  background-color: #00796b;
  border-radius: 6px;
  border-left: 4px solid #80cbc4;

  @media (max-width: 768px) {
    padding: 8px; /* Adjust padding for mobile */
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 18px; /* Adjust font size for mobile */
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  color: #e0f2f1;

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size for mobile */
  }
`;


const EmissionsDashboard: React.FC = () => {
  const emissionsOptions: ApexOptions = {
    chart: {
      type: 'bar',
      foreColor: '#e0e0e0', // Lighter text for chart labels
      background: '#303030', // Slightly lighter background for readability
    },
    series: [
      {
        name: 'Emissions (Metric Tons CO2e)',
        data: [3550, 2750, 2200],
      },
    ],
    xaxis: {
      categories: ['Plant A', 'Plant B', 'Headquarters'],
    },
    title: {
      text: 'Total Emissions by Source',
      style: {
        color: '#80cbc4', // Accent color for titles
        fontSize: '18px',
      },
    },
    colors: ['#80cbc4'], // Lighter green for bars
    tooltip: {
      theme: 'dark', // Dark theme tooltip for better visibility
      style: {
        fontSize: '14px',
        // color: '#000', // Text color inside tooltip
      },
      marker: {
        fillColors: ['#80cbc4'], // Tooltip marker color matches the bar color
      },
    },
  };

  const energyConsumptionOptions: ApexOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      foreColor: '#e0e0e0',
      background: '#303030',
    },
    series: [
      {
        name: 'Electricity',
        data: [10000000, 8850000, 3780000],
      },
      {
        name: 'Natural Gas/Diesel/Heating Oil',
        data: [2500000, 2950000, 420000],
      },
    ],
    xaxis: {
      categories: ['Plant A', 'Plant B', 'Headquarters'],
    },
    title: {
      text: 'Energy Consumption Breakdown (kWh)',
      style: {
        color: '#80cbc4',
        fontSize: '18px',
      },
    },
    colors: ['#80cbc4', '#004d40'], // Stack colors for electricity and gas/diesel
    tooltip: {
      theme: 'dark',
      style: {
        fontSize: '14px',
        // color: '#000',
      },
      marker: {
        fillColors: ['#80cbc4', '#004d40'], // Tooltip colors match the stack colors
      },
    },
  };

  // const carbonFootprintOptions: ApexOptions = {
  //   chart: {
  //     type: 'line',
  //     foreColor: '#e0e0e0',
  //     background: '#303030',
  //   },
  //   series: [
  //     {
  //       name: 'Carbon Footprint',
  //       data: [8100, 8300, 7900, 7500, 7200],
  //     },
  //     {
  //       name: 'Projected Carbon Footprint',
  //       data: [7200, 6500],
  //     },
  //   ],
  //   xaxis: {
  //     categories: ['2019', '2020', '2021', '2022', '2023', '2024 (Projected)'],
  //   },
  //   title: {
  //     text: 'Carbon Footprint Trends (Metric Tons CO2e)',
  //     style: {
  //       color: '#80cbc4',
  //       fontSize: '18px',
  //     },
  //   },
  //   colors: ['#80cbc4', '#004d40'], // Lighter colors for line graphs
  //   tooltip: {
  //     theme: 'dark',
  //     style: {
  //       fontSize: '14px',
  //       color: '#000',
  //     },
  //     marker: {
  //       fillColors: ['#80cbc4', '#004d40'], // Line colors in tooltip
  //     },
  //   },
  // };

  // const costSavingsOptions: ApexOptions = {
  //   chart: {
  //     type: 'bar',
  //     foreColor: '#e0e0e0',
  //     background: '#303030',
  //   },
  //   series: [
  //     {
  //       name: 'Cost Savings (USD)',
  //       data: [200000, 75000, 120000],
  //     },
  //     {
  //       name: 'Maintenance Cost Reduction (USD)',
  //       data: [0, 0, 40000],
  //     },
  //   ],
  //   xaxis: {
  //     categories: ['Energy Efficiency', 'Recycling/Waste Reduction', 'Fleet Electrification'],
  //   },
  //   title: {
  //     text: 'Cost Savings from Sustainability Initiatives',
  //     style: {
  //       color: '#80cbc4',
  //       fontSize: '18px',
  //     },
  //   },
  //   colors: ['#80cbc4', '#004d40'], // Colors for cost savings
  //   tooltip: {
  //     theme: 'dark',
  //     style: {
  //       fontSize: '14px',
  //       color: '#000',
  //     },
  //     marker: {
  //       fillColors: ['#80cbc4', '#004d40'],
  //     },
  //   },
  // };

  const aiNotes = [
    'Plant A has the highest emissions, largely driven by electricity and natural gas usage. Consider energy efficiency improvements.',
    'The projected reduction of 10% in 2024 is achievable, but further efforts in fleet electrification and waste reduction will be essential.',
    'Fleet electrification could yield substantial cost savings and help reduce emissions from transportation.',
  ];

  return (
    <DashboardContainer>
      <Section>
        <ChartContainer>
          <Chart
            options={emissionsOptions}
            series={emissionsOptions.series}
            type="bar"
            height={350}
          />
        </ChartContainer>
        <NotesContainer>
          <Title>AI Agent Insights</Title>
          {aiNotes.map((note, index) => (
            <Note key={index}>
              <Subtitle>{note}</Subtitle>
            </Note>
          ))}
        </NotesContainer>
      </Section>

      <Section>
        <ChartContainer>
          <Chart
            options={energyConsumptionOptions}
            series={energyConsumptionOptions.series}
            type="bar"
            height={350}
          />
        </ChartContainer>
      </Section>

      {/* <Section>
        <ChartContainer>
          <Chart
            options={carbonFootprintOptions}
            series={carbonFootprintOptions.series}
            type="line"
            height={350}
          />
        </ChartContainer>
      </Section>

      <Section>
        <ChartContainer>
          <Chart
            options={costSavingsOptions}
            series={costSavingsOptions.series}
            type="bar"
            height={350}
          />
        </ChartContainer>
      </Section> */}
    </DashboardContainer>
  );
};

export default EmissionsDashboard;
