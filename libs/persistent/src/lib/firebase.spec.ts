import { app, db, analytics } from './firebase';

describe('persistent', () => {
  it('should work', () => {
    expect(app).toBeTruthy()
    expect(db).toBeTruthy()
    expect(analytics).toBeTruthy()
  });
});
