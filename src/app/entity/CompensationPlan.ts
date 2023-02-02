export class CompensationPlan {
    planId !: number;
    compensationPlanName !: string;
    partnerName !: string;
    calculationMethodology !: string;
    minQuantity !: number;
    maxQuantity !: number;
    percentageCompensation !: number;
    validFrom !: Date;
    validTo !: Date;
}