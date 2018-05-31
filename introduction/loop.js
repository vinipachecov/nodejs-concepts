const pendingTimers = [];
const pendingOsTasks = [];
const pendingOperations = [];

// new timers , tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // check one: any pending setTimeout, setINterval or setImmediate
  // check two: any OS Tasks (Like server listening to port)

  // check three: any pending long running operations
  return pendingTimers.length || pendingOsTasks.length || pendingOperations.length;
}

while (shouldContinue()) {
  // node look as pending timers and sees if any functions are ready to be called
  
  // Node looks at pending OSTasks and pendingOperations
  // and calls relevant callbacks. SetTimetout, setInterval

  // Pause execution. COntinue when
  //- a new pendingOSTask is done
  //- a new pendingOPeration is done
  //- a timer is about to complete

}