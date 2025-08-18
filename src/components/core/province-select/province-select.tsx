'use client';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PROVINCES } from '@dfl/location';
import { MapPin } from 'lucide-react';

export default function ProvinceSelect() {
  const [selectedProvince, setSelectedProvince] = useState<string>('');

  return (
    <Select onValueChange={(val) => setSelectedProvince(val)} value={selectedProvince}>
      <SelectTrigger
        aria-label="Seleccionar provincia"
        className="btn max-w-[180px] flex items-center gap-2 bg-[var(--color-input-bg)] px-3 py-2 rounded-md"
      >
        <MapPin className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
        <SelectValue placeholder="Provincias" />
      </SelectTrigger>

      <SelectContent>
        {PROVINCES.map((pv) => (
          <SelectItem key={pv?.code} value={pv?.code}>
            {pv?.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
