export interface SimulationParams {
  initialValue: number;
  monthlyContribution: number;
  annualRate: number;
  months: number;
}

export interface SimulationResult {
  futureValue: number;
  totalInvested: number;
  interestEarned: number;
  yieldPercentage: number;
  evolution: Array<{
    month: number;
    capital: number;
    accumulated: number;
  }>;
}

export function calculateMonthlyRate(annualRatePercentage: number): number {
  return Math.pow(1 + annualRatePercentage / 100, 1 / 12) - 1;
}

export function calculateInvestment({
  initialValue,
  monthlyContribution,
  annualRate,
  months
}: SimulationParams): SimulationResult {
  const i = calculateMonthlyRate(annualRate);
  let accumulated = initialValue;
  let capital = initialValue;
  
  const evolution = [{ month: 0, capital, accumulated }];

  for (let m = 1; m <= months; m++) {
    accumulated = accumulated * (1 + i) + monthlyContribution;
    capital += monthlyContribution;
    evolution.push({ month: m, capital, accumulated });
  }

  const interestEarned = accumulated - capital;
  const yieldPercentage = capital > 0 ? (interestEarned / capital) * 100 : 0;

  return {
    futureValue: accumulated,
    totalInvested: capital,
    interestEarned,
    yieldPercentage,
    evolution
  };
}
