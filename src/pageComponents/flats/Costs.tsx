import { Divider } from '@mui/material';

import { Icosts } from '@/store/flatStore';

export const Costs = ({ costs }: { costs?: Icosts }) => {
  return (
    <div className=' h-auto w-full py-9'>
      <div>
        <h2 className=' text-primary-main text-2xl font-semibold'>
          Costs & Expences
        </h2>
        <Divider />
      </div>
      <div className=''>
        <div className='m-auto mt-9 grid w-[100%] grid-cols-1 justify-center gap-3 text-sm font-semibold text-teal-800 md:grid-cols-3 md:gap-9 '>
          {costs?.currency && (
            <div>
              <div>Currency: {costs?.currency ? costs.currency : ' -'}</div>
              <Divider />
            </div>
          )}

          {costs?.negotiable && (
            <div>
              <div>
                Negiotiability: {costs?.negotiable ? costs.negotiable : ' -'}
              </div>
              <Divider />
            </div>
          )}

          {true && (
            <div>
              <div>
                Monthly Rent:{costs?.currency} {costs?.monthlyCost ?? ' -'}
              </div>
              <Divider />
            </div>
          )}
          {true && (
            <div>
              <div>
                Yearly Rent:{costs?.currency} {costs?.yearlyCost ?? ' -'}
              </div>
              <Divider />
            </div>
          )}
          {true && (
            <div>
              <div>
                Purchase Cost:{costs?.currency} {costs?.purchaseCost ?? ' -'}
              </div>
              <Divider />
            </div>
          )}

          <div>
            <div>
              Utility Cost: {costs?.currency} {costs?.utilityCost}
            </div>
            <Divider />
          </div>
          <div>
            <div>
              Mortgage Payments: {costs?.currency} {costs?.mortgagePayments}
            </div>
            <Divider />
          </div>
          <div>
            <div>
              Insurance Cost: {costs?.currency} {costs?.insuranceCost}
            </div>
            <Divider />
          </div>
          <div>
            <div>
              Property Tax: {costs?.currency} {costs?.propertyTax}
            </div>
            <Divider />
          </div>
          <div>
            <div>
              Internet Cost: {costs?.currency} {costs?.internetCost}
            </div>
            <Divider />
          </div>
          <div>
            <div>
              Parking Fee: {costs?.currency} {costs?.parkingFee}
            </div>
            <Divider />
          </div>
          <div>
            <div>
              Pet Fee: {costs?.currency} {costs?.petFee}
            </div>
            <Divider />
          </div>
          <div>
            <div>
              Communal Facility Fee: {costs?.currency}{' '}
              {costs?.communalFacilityFee}
            </div>
            <Divider />
          </div>
          <div>
            <div>
              Cleaning Fee: {costs?.currency} {costs?.cleaningFee}
            </div>
            <Divider />
          </div>
          <div>
            <div>
              Home Improvement Fee: {costs?.currency} {costs?.homeImprovement}
            </div>
            <Divider />
          </div>
          <div>
            <div>
              Legal Fees: {costs?.currency} {costs?.legalFees}
            </div>
            <Divider />
          </div>
          <div>
            <div>
              Furniture Costs: {costs?.currency} {costs?.furnitureAppliances}
            </div>
            <Divider />
          </div>
          <div>
            <div>
              Moving Cost: {costs?.currency} {costs?.movingCost}
            </div>
            <Divider />
          </div>
          <div>
            <div>
              Security System Cost: {costs?.currency} {costs?.securitySystem}
            </div>
            <Divider />
          </div>
          <div>
            <div>
              Setup Cost: {costs?.currency} {costs?.homeOfficeSetup}
            </div>
            <Divider />
          </div>
          <div>
            <div>
              Maintenance Cost: {costs?.currency} {costs?.maintenanceRepairs}
            </div>
            <Divider />
          </div>
          <div>
            <div>
              Other Costs: {costs?.currency} {costs?.otherCost}
            </div>
            <Divider />
          </div>
        </div>
      </div>
    </div>
  );
};
