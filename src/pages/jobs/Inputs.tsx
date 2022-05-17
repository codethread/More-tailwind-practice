import { InputSelectFactory } from '../../components';
import { occupations, outOfWorkStatus } from './info';

export const InputSelectUnemployed = InputSelectFactory(outOfWorkStatus);
export const InputSelectOccupation = InputSelectFactory(occupations);
