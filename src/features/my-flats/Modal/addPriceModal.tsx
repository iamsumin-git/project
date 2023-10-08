import { Button } from '@mui/material';
import { Dialog } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SiAddthis } from 'react-icons/si';

import { Icosts } from '@/store/flatStore';
import { useFlatStore } from '@/store/flatStore';

import ReactSelect from '@/features/HookForm/ReactSelect';
import TextField from '@/features/HookForm/TextField';

const negotiabilityOptions = [
  { label: 'Negotiable', value: 'negotiable' },
  { label: 'Non-Negotiable', value: 'non-negotiable' },
];

export const AddPricing = () => {
  const [open, setOpen] = useState(false);

  const { costs, setCosts, purpose } = useFlatStore();

  const {
    handleSubmit,
    control,

    formState: { errors, isDirty },
  } = useForm<Icosts>({
    defaultValues: {
      currency: costs.currency,
      negotiable: costs.negotiable,
      purchaseCost: costs.purchaseCost ?? 0,
      monthlyCost: costs.monthlyCost ?? 0,
      yearlyCost: costs.yearlyCost ?? 0,
      mortgagePayments: costs.mortgagePayments ?? 0,
      utilityCost: costs.utilityCost ?? 0,
      insuranceCost: costs.insuranceCost ?? 0,
      propertyTax: costs.propertyTax ?? 0,
      internetCost: costs.internetCost ?? 0,
      parkingFee: costs.parkingFee ?? 0,
      petFee: costs.petFee ?? 0,
      communalFacilityFee: costs.communalFacilityFee ?? 0,
      cleaningFee: costs.cleaningFee ?? 0,
      homeImprovement: costs.homeImprovement ?? 0,
      furnitureAppliances: costs.furnitureAppliances ?? 0,
      legalFees: costs.legalFees ?? 0,
      movingCost: costs.movingCost ?? 0,
      securitySystem: costs.securitySystem ?? 0,
      homeOfficeSetup: costs.homeOfficeSetup ?? 0,
      maintenanceRepairs: costs.maintenanceRepairs ?? 0,
      otherCost: costs.otherCost ?? 0,
    },
  });

  const onSubmit = (data: Icosts) => {
    setCosts(data);
    setOpen(false);
  };

  const [currenciesList, setcurrenciesList] = useState<any>({});

  useEffect(() => {
    const fetchCurrenciesList = async () => {
      const fetchCurrencies = await fetch(
        'https://openexchangerates.org/api/currencies.json'
      );
      const data = await fetchCurrencies.json();
      setcurrenciesList(data);
    };
    fetchCurrenciesList();
  }, []);

  return (
    <div>
      <div>
        <Button
          startIcon={<SiAddthis />}
          className=' capitalize'
          onClick={() => setOpen(true)}
        >
          Add/Update Pricing
        </Button>
      </div>
      <Dialog
        open={open}
        fullWidth
        maxWidth='md'
        onClose={() => setOpen(false)}
      >
        <div>
          <div className=' m-auto my-5 h-auto w-[90%] overflow-y-scroll'>
            <h3 className=' text-[18px] font-semibold '> Costs</h3>
            <div className='grid w-full grid-cols-2 gap-5 '>
              <div>
                <ReactSelect
                  name='currency'
                  // options={[{ label: 'nepali', value: 'nepali' }]}
                  options={Object.keys(currenciesList).map((key) => ({
                    label: currenciesList[key],
                    value: key,
                  }))}
                  label='Currency'
                  placeholder='currency'
                  control={control}
                  required
                  helperText={
                    errors.currency?.type === 'required'
                      ? 'Currency is Required'
                      : ''
                  }
                  error={!!errors.currency}
                />
              </div>
              {/* <div>
                <TextField
                  name='rentCost'
                  type='number'
                  placeholder=' Rent Cost'
                  control={control}
                  label='Rent Cost'
                />
              </div> */}

              <div>
                <ReactSelect
                  name='negotiable'
                  options={negotiabilityOptions}
                  label='Negotiability'
                  placeholder='negotiability'
                  control={control}
                  required
                  helperText={
                    errors.negotiable?.type === 'required'
                      ? 'Negotiability is Required'
                      : ''
                  }
                  error={!!errors.negotiable}
                />
              </div>

              {purpose == 'sell' && (
                <div>
                  <TextField
                    name='purchaseCost'
                    type='number'
                    placeholder=' Purchase Cost'
                    control={control}
                    label='Purchase Cost'
                  />
                </div>
              )}
              {purpose == 'rent' && (
                <div>
                  <TextField
                    name='monthlyCost'
                    type='number'
                    placeholder=' Monthly Rent'
                    control={control}
                    label='Monthly Rent'
                  />
                </div>
              )}
              {purpose == 'rent' && (
                <div>
                  <TextField
                    name='yearlyCost'
                    type='number'
                    placeholder=' Yearly Rent'
                    control={control}
                    label='Yearly Cost'
                  />
                </div>
              )}
              <div>
                <TextField
                  name='utilityCost'
                  type='number'
                  placeholder=' Utility Cost'
                  control={control}
                  label='Utility Cost'
                />
              </div>
              <div>
                <TextField
                  name='insuranceCost'
                  type='number'
                  placeholder=' Insurance Cost'
                  control={control}
                  label='Insurance Cost'
                />
              </div>
              <div>
                <TextField
                  name='mortgagePayments'
                  type='number'
                  placeholder=' Mortagage  Payments'
                  control={control}
                  label='Mortagage Payments'
                />
              </div>
              <div>
                <TextField
                  name='internetCost'
                  type='number'
                  placeholder=' Internet Cost'
                  control={control}
                  label='Internet Cost'
                />
              </div>
              <div>
                <TextField
                  name='homeImprovement'
                  type='number'
                  placeholder=' Improvement Cost'
                  control={control}
                  label='Improvement Cost'
                />
              </div>
              <div>
                <TextField
                  name='propertyTax'
                  type='number'
                  placeholder=' Property Tax'
                  control={control}
                  label='Property Tax'
                />
              </div>
              <div>
                <TextField
                  name='legalFees'
                  type='number'
                  placeholder=' Legal Fees'
                  control={control}
                  label='Legal Fees'
                />
              </div>
              <div>
                <TextField
                  name='parkingFee'
                  type='number'
                  placeholder=' Parking Fee'
                  control={control}
                  label='Parking Fee'
                />
              </div>

              <div>
                <TextField
                  name='furnitureAppliances'
                  type='number'
                  placeholder=' Forniture Costs'
                  control={control}
                  label='Forniture Costs'
                />
              </div>

              <div>
                <TextField
                  name='movingCost'
                  type='number'
                  placeholder=' Moving Costs'
                  control={control}
                  label='Moving Costs'
                />
              </div>

              <div>
                <TextField
                  name='securitySystem'
                  type='number'
                  placeholder=' Security System Costs'
                  control={control}
                  label='Security System Costs'
                />
              </div>

              <div>
                <TextField
                  name='homeOfficeSetup'
                  type='number'
                  placeholder=' Setup Costs'
                  control={control}
                  label='SetUp Costs'
                />
              </div>

              <div>
                <TextField
                  name='maintenanceRepairs'
                  type='number'
                  placeholder=' Maintainance Costs'
                  control={control}
                  label='Maintainance Costs'
                />
              </div>

              <div>
                <TextField
                  name='petFee'
                  type='number'
                  placeholder=' Pet Fee'
                  control={control}
                  label='Pet Fee'
                />
              </div>

              <div>
                <TextField
                  name='cleaningFee'
                  type='number'
                  placeholder=' Cleaning Fee'
                  control={control}
                  label='Cleaning Fee'
                />
              </div>

              <div>
                <TextField
                  name='communalFacilityFee'
                  type='number'
                  placeholder=' Communal Facility Fee'
                  control={control}
                  label='Communal Facility Fee'
                />
              </div>

              <div>
                <TextField
                  name='otherCost'
                  type='number'
                  placeholder=' Other Costs'
                  control={control}
                  label='Other Costs'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-row-reverse gap-5'>
              <Button variant='contained' onClick={handleSubmit(onSubmit)}>
                Save Prices
              </Button>
              <Button variant='outlined' onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
