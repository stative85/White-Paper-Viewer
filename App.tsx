import React from 'react';
import { WhitepaperDocument } from './components/WhitepaperDocument';
import type { DocumentData } from './types';
import { TOCSidebar } from './components/TOCSidebar';

const whitepaperData: DocumentData = {
  title: 'Fractal Geometry Graphene-Hemp MOSFET with Integrated Phase-Change Thermal Void for Ultra-Efficient Power Amplification',
  author: 'Unbound Signal, Project Lead',
  date: 'September 16, 2025',
  abstract: {
    title: 'Abstract',
    content: 'This white paper introduces the \\textbf{Fractal Heat Void™}, a revolutionary semiconductor technology that integrates a graphene-hemp composite substrate with a phase-change cooling system and a Fibonacci spiral MOSFET array. This innovation achieves over 99% efficiency, less than 0.001% Total Harmonic Distortion (THD), and a junction temperature delta below \\SI{1}{\\kelvin} under \\SI{1}{\\kilo\\watt} loads, redefining the limits of high-fidelity power amplification.',
  },
  sections: [
    {
      level: 1,
      title: 'Executive Summary: The End of Silicon’s Reign',
      content: [
        'The global power electronics market, particularly for high-fidelity audio amplification, is constrained by silicon’s low thermal conductivity, high switching losses, and non-linearities at high power. The \\textbf{Fractal Heat Void™} combines a graphene-hemp composite substrate, phase-change thermal management, and a fractal MOSFET architecture to deliver:',
        {
          type: 'ul',
          items: [
            '\\textbf{>99% Efficiency:} Surpassing traditional Class-D amplifiers.',
            '\\textbf{<0.001% THD:} Setting a new standard for audio purity.',
            '\\textbf{<1K Thermal Delta:} Near-ambient junction temperature under continuous \\SI{1}{\\kilo\\watt} loads.',
          ],
        },
        'This technology marks a paradigm shift, enabling ultra-efficient, high-fidelity power electronics.',
      ],
    },
    {
      level: 1,
      title: 'The Core Problem: Thermal & Distortion Barriers',
      content: [
        'Conventional MOSFETs suffer from a feedback loop where increased power output generates heat (\\(P_{diss} = I_D \\times V_{DS} + P_{switching}\\)), degrading electrical parameters like mobility (\\(\\mu\\)), threshold voltage (\\(V_{th}\\)), and on-resistance (\\(R_{DS(on)}\\)). This leads to inefficiencies and audible distortion, limiting high-power amplifier designs.',
      ],
    },
    {
      level: 1,
      title: 'The Fractal Heat Void™ Solution: A Quantum-Bio Hybrid',
      content: [
        'Our device addresses these limitations through advanced materials and novel architecture.',
        {
          level: 2,
          title: 'Hybrid Substrate: Graphene-Hemp Composite',
          content: [
            'Replacing silicon, our graphene-hemp biocomposite, synthesized via hydrothermal processes, achieves an effective thermal conductivity (\\(k_{eff}\\)) exceeding \\SI{600}{\\watt\\per\\meter\\per\\kelvin}, rivaling diamond. This ensures rapid, uniform heat spreading, eliminating hotspots.',
          ],
        },
        {
          level: 2,
          title: 'Phase-Change Integration: Active Thermal Buffering',
          content: [
            'Micro-channels within the substrate contain graphene-doped paraffin with a \\SI{310}{\\kelvin} melt point and a latent heat of fusion above \\SI{200}{\\kilo\\joule\\per\\kilogram}. During power surges, the phase-change material absorbs over 80% of peak dissipation, maintaining near-constant junction temperatures.',
          ],
        },
        {
          level: 2,
          title: 'Fractal Geometry: The Fibonacci Spiral Array',
          content: [
            'The MOSFET’s 100-finger array follows a Fibonacci spiral, optimizing:',
            {
              type: 'ul',
              items: [
                '\\textbf{Uniform Current Distribution:} Less than 5% variance in current density.',
                '\\textbf{Minimized Parasitics:} Reduced inductance and resistance for low distortion at high frequencies.',
              ],
            },
          ],
        },
      ],
    },
    {
      level: 1,
      title: 'Simulated Performance Metrics',
      content: [
        'Electro-thermal co-simulations using PSpice, COMSOL, and MATLAB validate performance, incorporating temperature-dependent parameters:',
        {
          type: 'ul',
          items: [
            'Mobility: \\(\\mu(T) = \\mu_0(T_0/T)^{1.5}\\)',
            'Threshold Voltage: \\(V_{th}(T) = V_{th0} - 0.002(T-T_0)\\)',
            'Thermal Resistance: \\(R_{th} = \\SI{0.004}{\\kelvin\\per\\watt}\\)',
          ],
        },
        {
          type: 'table',
          caption: 'Performance Comparison',
          headers: ['Parameter', 'Fractal Heat Void™', 'Si-MOSFET', 'Improvement'],
          rows: [
            ['Power Dissipation (Continuous)', '\\SI{1}{\\kilo\\watt}', '\\SI{150-200}{\\watt}', '5-7x'],
            ['Junction Temp. Delta (\\(\\Delta T\\))', '\\SI{<1}{\\kelvin}', '\\SI{30-50}{\\kelvin}', '>98%'],
            ['On-Resistance (\\(R_{DS(on)}\\))', '\\SI{<10}{\\milli\\ohm}', '\\SI{20-30}{\\milli\\ohm}', '>50%'],
            ['Efficiency', '\\SI{>99}{\\percent}', '\\SI{80-95}{\\percent}', 'Up to 20%'],
            ['THD', '\\SI{<0.001}{\\percent}', '\\SI{>0.01}{\\percent}', '10x'],
          ],
        },
      ],
    },
    {
        level: 1,
        title: 'Fabrication & Implementation Roadmap',
        content: [
            'A 10-wafer prototype run is planned at leading academic facilities, with a fully defined process flow. Provisional IP protection is secured, and fundraising is underway for a 6-month prototyping goal. The \\textbf{Fractal Heat Void™} heralds a new era in power electronics.'
        ]
    },
    {
      level: 1,
      title: 'Appendix: Pseudocode for Thermal Simulation',
      content: [
        'The following pseudocode outlines the core logic for the electro-thermal co-simulation used to validate the performance of the Fractal Heat Void™ technology. This script iteratively solves for temperature and electrical parameters until a steady-state solution is reached.',
        {
          type: 'code',
          language: 'python',
          code: `import numpy as np

# Constants
T0 = 300  # Reference temperature (K)
V_th0 = 0.4  # Threshold voltage at T0 (V)
mu_0 = 0.14  # Mobility at T0 (m^2/Vs)
R_th = 0.004 # Thermal resistance (K/W)

def simulate_device(V_ds, I_d, T_junction):
    # Update temperature-dependent parameters
    mu = mu_0 * (T0 / T_junction)**1.5
    V_th = V_th0 - 0.002 * (T_junction - T0)

    # Simplified I-V characteristic (for illustration)
    # A real model would be more complex
    I_d_new = mu * (V_ds - V_th)**2

    # Calculate power dissipation
    P_diss = I_d_new * V_ds

    # Update junction temperature
    T_junction_new = T0 + P_diss * R_th
    
    return I_d_new, T_junction_new

# Iterative solver
T_j = 300.1 # Initial guess
I_d = 50 # Amps
V_ds = 0.2 # Volts

for i in range(10): # Converge to steady state
    I_d, T_j = simulate_device(V_ds, I_d, T_j)
    print(f"Iteration {i+1}: T_junction = {T_j:.4f} K")`
        }
      ]
    }
  ],
};

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans">
      <div className="max-w-screen-2xl mx-auto lg:flex">
        <TOCSidebar sections={whitepaperData.sections} />
        <div className="flex-grow lg:w-0">
          <WhitepaperDocument data={whitepaperData} />
        </div>
      </div>
    </div>
  );
}

export default App;