import Autocomplete from './Autocomplete'
import Checkbox from './Checkbox'
import Datepicker from './Date'
import Radio from './Radio'
import Select from './Select'
import Text from './Text'

export const STEPS = {
    1: {
        key: 'text',
        breadcrumb: 'Text',
        Tag: Text,
    },
    2: {
        key: 'select',
        breadcrumb: 'Select',
        Tag: Select,
    },
    3: {
        key: 'autocomplete',
        breadcrumb: 'Autocomplete',
        Tag: Autocomplete,
    },
    4: {
        key: 'checkbox',
        breadcrumb: 'Checkbox',
        Tag: Checkbox,
    },
    5: {
        key: 'radio',
        breadcrumb: 'Radio',
        Tag: Radio,
    },
    6: {
        key: 'datepicker',
        breadcrumb: 'Datepicker',
        Tag: Datepicker,
    },
    7: {
        key: 'timepicker',
        breadcrumb: 'Timepicker',
        // Tag: Datepicker,
    },
}
