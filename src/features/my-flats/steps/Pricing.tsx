import { Divider } from '@mui/material';
import { useForm } from 'react-hook-form';

import { Icosts } from '@/store/flatStore';
import { useFlatStore } from '@/store/flatStore';

import { AddPricing } from '@/features/my-flats/Modal/addPriceModal';

const Pricing = () => {
  const {
    handleSubmit,
    control,

    formState: { errors, isDirty },
  } = useForm<Icosts>({
    defaultValues: {},
  });

  const { costs, purpose } = useFlatStore();

  const isRent = purpose == 'rent';
  const isSell = purpose == 'sell';

  return (
    <>
      <div className='mt-9 flex justify-center'>
        <AddPricing />
      </div>

      <div className='m-auto mt-9 grid w-[80%] justify-center gap-9 text-lg font-semibold text-teal-800 md:grid-cols-3 '>
        {costs.currency && (
          <div>
            <div>Currency: {costs.currency ? costs.currency : ' -'}</div>
            <Divider />
          </div>
        )}

        {costs.negotiable && (
          <div>
            <div>
              Negiotiability:{' '}
              <span>{costs.negotiable ? costs.negotiable : ' -'}</span>
            </div>
            <Divider />
          </div>
        )}

        {isRent && (
          <div>
            <div>
              Monthly Rent: <span>{costs.currency}</span>
              {costs.monthlyCost ?? ' -'}
            </div>
            <Divider />
          </div>
        )}
        {isRent && (
          <div>
            <div>
              Yearly Rent: <span>{costs.currency}</span>
              {costs.yearlyCost ?? ' -'}
            </div>
            <Divider />
          </div>
        )}
        {isSell && (
          <div>
            <div>
              Purchase Cost:<span>{costs.currency}</span>{' '}
              {costs.purchaseCost ?? ' -'}
            </div>
            <Divider />
          </div>
        )}

        <div>
          <div>
            Utility Cost: <span>{costs.currency}</span> {costs.utilityCost}
          </div>
          <Divider />
        </div>
        <div>
          <div>
            Mortgage Payments: <span>{costs.currency}</span>{' '}
            {costs.mortgagePayments}
          </div>
          <Divider />
        </div>
        <div>
          <div>
            Insurance Cost: <span>{costs.currency}</span> {costs.insuranceCost}
          </div>
          <Divider />
        </div>
        <div>
          <div>
            Property Tax: <span>{costs.currency}</span> {costs.propertyTax}
          </div>
          <Divider />
        </div>
        <div>
          <div>
            Internet Cost: <span>{costs.currency}</span> {costs.internetCost}
          </div>
          <Divider />
        </div>
        <div>
          <div>
            Parking Fee: <span>{costs.currency}</span> {costs.parkingFee}
          </div>
          <Divider />
        </div>
        <div>
          <div>
            Pet Fee: <span>{costs.currency}</span> {costs.petFee}
          </div>
          <Divider />
        </div>
        <div>
          <div>
            Communal Facility Fee: <span>{costs.currency}</span>{' '}
            {costs.communalFacilityFee}
          </div>
          <Divider />
        </div>
        <div>
          <div>
            Cleaning Fee: <span>{costs.currency}</span> {costs.cleaningFee}
          </div>
          <Divider />
        </div>
        <div>
          <div>
            Home Improvement Fee: <span>{costs.currency}</span>{' '}
            {costs.homeImprovement}
          </div>
          <Divider />
        </div>
        <div>
          <div>
            Legal Fees: <span>{costs.currency}</span> {costs.legalFees}
          </div>
          <Divider />
        </div>
        <div>
          <div>
            Furniture Costs: <span>{costs.currency}</span>{' '}
            {costs.furnitureAppliances}
          </div>
          <Divider />
        </div>
        <div>
          <div>
            Moving Cost: <span>{costs.currency}</span> {costs.movingCost}
          </div>
          <Divider />
        </div>
        <div>
          <div>
            Security System Cost: <span>{costs.currency}</span>{' '}
            {costs.securitySystem}
          </div>
          <Divider />
        </div>
        <div>
          <div>
            Setup Cost: <span>{costs.currency}</span> {costs.homeOfficeSetup}
          </div>
          <Divider />
        </div>
        <div>
          <div>
            Maintenance Cost: <span>{costs.currency}</span>{' '}
            {costs.maintenanceRepairs}
          </div>
          <Divider />
        </div>
        <div>
          <div>
            Other Costs: <span>{costs.currency}</span> {costs.otherCost}
          </div>
          <Divider />
        </div>
      </div>
    </>
  );
};

export default Pricing;
