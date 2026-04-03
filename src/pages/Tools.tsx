import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Target, ShieldCheck, Info, ChevronRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { cn } from '../lib/utils';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [isComparisonEnabled, setIsComparisonEnabled] = useState(false);
  const [monthlyInvestment2, setMonthlyInvestment2] = useState(10000);
  const [expectedReturn2, setExpectedReturn2] = useState(15);

  const calculateSIP = (monthly: number, yrs: number, rate: number) => {
    const i = rate / 100 / 12;
    const n = yrs * 12;
    const futureValue = n === 0 ? 0 : monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const totalInvested = monthly * n;
    const estimatedReturns = futureValue - totalInvested;

    return {
      futureValue: Math.round(futureValue),
      totalInvested: Math.round(totalInvested),
      estimatedReturns: Math.round(estimatedReturns)
    };
  };

  const results1 = calculateSIP(monthlyInvestment, years, expectedReturn);
  const results2 = calculateSIP(monthlyInvestment2, years, expectedReturn2);

  // Generate chart data
  const maxYears = years;
  const chartData = Array.from({ length: maxYears + 1 }, (_, year) => {
    const n = year * 12;
    const i1 = expectedReturn / 100 / 12;
    const i2 = expectedReturn2 / 100 / 12;
    
    const fv1 = n === 0 ? 0 : monthlyInvestment * ((Math.pow(1 + i1, n) - 1) / i1) * (1 + i1);
    const fv2 = n === 0 ? 0 : monthlyInvestment2 * ((Math.pow(1 + i2, n) - 1) / i2) * (1 + i2);
    
    return {
      year: `Year ${year}`,
      value1: Math.round(fv1),
      invested1: monthlyInvestment * n,
      value2: Math.round(fv2),
      invested2: monthlyInvestment2 * n,
    };
  });

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100 min-w-[200px]">
          <p className="text-sm font-bold text-primary mb-3 border-b pb-2">{label}</p>
          <div className="space-y-3">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Scenario A</p>
              <div className="flex justify-between items-center gap-4">
                <span className="text-xs text-gray-600">Total Value:</span>
                <span className="text-sm font-bold text-primary">₹{payload[0].value.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center gap-4">
                <span className="text-xs text-gray-600">Invested:</span>
                <span className="text-sm font-bold text-gray-400">₹{payload[1].value.toLocaleString()}</span>
              </div>
            </div>
            
            {isComparisonEnabled && (
              <div className="space-y-1 pt-2 border-t border-dashed">
                <p className="text-[10px] font-bold text-secondary uppercase tracking-wider">Scenario B</p>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-xs text-gray-600">Total Value:</span>
                  <span className="text-sm font-bold text-secondary">₹{payload[2].value.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-xs text-gray-600">Invested:</span>
                  <span className="text-sm font-bold text-gray-400">₹{payload[3].value.toLocaleString()}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-[40%] space-y-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-primary">Scenario A</h3>
            <button 
              onClick={() => setIsComparisonEnabled(!isComparisonEnabled)}
              className={cn(
                "text-xs font-bold px-3 py-1.5 rounded-full transition-all",
                isComparisonEnabled 
                  ? "bg-secondary text-white shadow-lg shadow-blue-100" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              )}
            >
              {isComparisonEnabled ? "Disable Comparison" : "Enable Comparison"}
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-4 flex justify-between">
                Monthly Investment <span>₹{monthlyInvestment.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-4 flex justify-between">
                Time Period <span>{years} Years</span>
              </label>
              <input
                type="range"
                min="1"
                max="30"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-4 flex justify-between">
                Expected Return (p.a) <span>{expectedReturn}%</span>
              </label>
              <input
                type="range"
                min="1"
                max="20"
                step="0.5"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          </div>

          {isComparisonEnabled && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="pt-8 border-t border-dashed space-y-6"
            >
              <h3 className="text-lg font-bold text-secondary">Scenario B</h3>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-4 flex justify-between">
                  Monthly Investment <span>₹{monthlyInvestment2.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={monthlyInvestment2}
                  onChange={(e) => setMonthlyInvestment2(Number(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-4 flex justify-between">
                  Expected Return (p.a) <span>{expectedReturn2}%</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.5"
                  value={expectedReturn2}
                  onChange={(e) => setExpectedReturn2(Number(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Scenario A Total Value</p>
              <p className="text-2xl font-bold text-primary">₹{results1.futureValue.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-1">Invested: ₹{results1.totalInvested.toLocaleString()}</p>
            </div>
            {isComparisonEnabled && (
              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Scenario B Total Value</p>
                <p className="text-2xl font-bold text-secondary">₹{results2.futureValue.toLocaleString()}</p>
                <p className="text-xs text-blue-600 mt-1">Invested: ₹{results2.totalInvested.toLocaleString()}</p>
              </div>
            )}
          </div>
        </div>

        <div className="lg:w-[60%] flex flex-col">
          <div className="flex-1 min-h-[400px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#001f3f" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#001f3f" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3498db" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3498db" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="year" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94a3b8' }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94a3b8' }}
                  tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
                />
                <Tooltip content={<CustomTooltip />} />
                
                {/* Scenario A */}
                <Area 
                  type="monotone" 
                  dataKey="value1" 
                  stroke="#001f3f" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorValue1)" 
                  activeDot={{ r: 6, strokeWidth: 0, fill: '#001f3f' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="invested1" 
                  stroke="#94a3b8" 
                  strokeWidth={2} 
                  fill="transparent" 
                  strokeDasharray="5 5" 
                  activeDot={false}
                />

                {/* Scenario B */}
                {isComparisonEnabled && (
                  <>
                    <Area 
                      type="monotone" 
                      dataKey="value2" 
                      stroke="#3498db" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorValue2)" 
                      activeDot={{ r: 6, strokeWidth: 0, fill: '#3498db' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="invested2" 
                      stroke="#cbd5e1" 
                      strokeWidth={2} 
                      fill="transparent" 
                      strokeDasharray="5 5" 
                      activeDot={false}
                    />
                  </>
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs font-bold text-gray-600">Scenario A Value</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-400" />
              <span className="text-xs font-bold text-gray-600">Scenario A Invested</span>
            </div>
            {isComparisonEnabled && (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="text-xs font-bold text-gray-600">Scenario B Value</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-300" />
                  <span className="text-xs font-bold text-gray-600">Scenario B Invested</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Tools = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Financial Planning Tools</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Use our simple calculators to plan your financial journey. These tools help you visualize how disciplined investing can build wealth.
          </p>
        </div>

        <div className="space-y-16">
          {/* SIP Calculator Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="text-secondary w-8 h-8" />
              <h2 className="text-2xl font-bold text-primary">SIP Calculator</h2>
            </div>
            <SIPCalculator />
            <div className="mt-6 flex items-start gap-3 bg-gray-100 p-4 rounded-xl text-sm text-slate-800">
              <Info className="shrink-0 mt-0.5" size={18} />
              <p>
                <strong>What is SIP?</strong> Systematic Investment Plan (SIP) is a way to invest a fixed amount in mutual funds regularly. It helps in averaging the cost of investment and benefits from the power of compounding.
              </p>
            </div>
          </section>

          {/* Other Tools Placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Target className="text-secondary w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-primary mb-4">Goal Calculator</h3>
              <p className="text-gray-600 text-sm mb-6">
                Planning for a wedding, a new home, or world travel? Calculate exactly how much you need to save every month to reach your target amount.
              </p>
              <button className="text-secondary font-bold flex items-center hover:gap-2 transition-all">
                Coming Soon <ChevronRight size={18} />
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <ShieldCheck className="text-secondary w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-primary mb-4">Risk Profile Tool</h3>
              <p className="text-gray-600 text-sm mb-6">
                Answer a few simple questions to understand your comfort level with market ups and downs. This helps us suggest the right funds for you.
              </p>
              <button className="text-secondary font-bold flex items-center hover:gap-2 transition-all">
                Coming Soon <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 p-6 bg-white rounded-2xl border border-gray-200 text-center">
          <p className="text-sm text-gray-700 font-bold italic">
            Note: These calculators are for illustration purposes only and do not guarantee any returns. Mutual fund investments are subject to market risks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
