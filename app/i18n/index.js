import { Localization } from 'expo-localization';
import i18n from 'i18n-js';
import tw from './tw';
import en from './en';
import cn from './cn';

i18n.fallbacks = true;
i18n.translations["en"] = en;
i18n.translations["zh-Hant"] = tw;
i18n.translations["zh-Hans"] = cn;
i18n.locale = Localization.locale;

export default i18n;