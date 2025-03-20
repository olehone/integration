import { describe, it, expect } from 'vitest';

import FormGroupInput from '@/components/Inputs/formGroupInput.vue';
import DropDown from '@/components/Dropdown.vue';
import PaperTable from '@/components/PaperTable.vue';
import Button from '@/components/Button.vue';
import Card from '@/components/Cards/Card.vue';
import ChartCard from '@/components/Cards/ChartCard.vue';
import StatsCard from '@/components/Cards/StatsCard.vue';
import SidebarPlugin from '@/components/SidebarPlugin/index';

describe('Component Imports', () => {
  const components = {
    FormGroupInput,
    DropDown,
    PaperTable,
    Button,
    Card,
    ChartCard,
    StatsCard,
    SidebarPlugin
  };

  for (const [name, component] of Object.entries(components)) {
    it(`should import ${name} without errors`, () => {
      expect(component).toBeDefined();
    });
  }
});
