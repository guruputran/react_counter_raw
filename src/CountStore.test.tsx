import React from 'react';
import { render, screen } from '@testing-library/react';
import CountStore from './CountStore';
import renderer from 'react-test-renderer'

describe("CountStore", () => {
    it("should get count", async () => {
      const store = new CountStore();
      expect(store.count).not.toBeUndefined();
      await store.incs();
      expect(store.count).toBeGreaterThan(0);
      await store.decs();
      expect(store.count).toBeLessThan(1);

    });
});